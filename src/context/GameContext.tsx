import { createContext, useContext, useEffect, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { incomeUpgrades } from '../data/upgrades';

export const REBIRTH_THRESHOLD = 10_000_000;

export const permanentUpgrades = [
  {
    id: 'click',
    title: 'Мышка пережила лузстрик',
    description: '+1% к силе клика за уровень',
    basePrice: 1,
    maxLevel: 20,
  },
  {
    id: 'income',
    title: 'Стрим без зрителей',
    description: '+1% к пассивному доходу за уровень',
    basePrice: 2,
    maxLevel: 20,
  },
  {
    id: 'discount',
    title: 'Фикс на две строчки',
    description: '−0,25% к ценам за уровень',
    basePrice: 3,
    maxLevel: 20,
  },
] as const;


type UpgradeId = (typeof permanentUpgrades)[number]['id'];

type GameState = {
    papers: number;
    purchased: string[];
    quantities: Record<string, number>;
    clips: number;
    rebirths: number;
    levels: Record<UpgradeId, number>;
};

type GameContextValue = {
  shop: GameState;
  setShop: Dispatch<SetStateAction<GameState>>;
  papersPerClick: number;
  papersPerSecond: number;
  priceMultiplier: number;
  collectPaper: () => void;
  rebirth: (expectedReward: number) => void;
  buyPermanent: (id: UpgradeId) => void;
};

const GameContext = createContext<GameContextValue | null>(null);
// Расчёт награды за перерождение
export function getRebirthReward(papers: number) {
  return Math.floor(Math.sqrt(Math.max(0, papers) / REBIRTH_THRESHOLD));
}

//цена постоянного улучшения
export function getPermanentPrice(basePrice: number, level: number) {
  return basePrice * 2 ** level;
}

//сколько дает один клик
function calculateClick(state: GameState){
  const owned = (id:string) =>state.purchased.includes(id);

  let value = owned('mouse') ? 1.25 : 1;

  if(owned('build')) value *=1.1;
  if(owned('webcam')) value *=1.15;
  if(owned('vpk')) value *=1.1;
  if(owned('patch')) value *=1.05;
  if(owned('cap')) value *=1.05;

  return value * (1+state.levels.click*0.01);
}
//пассивный доход
function calculateIncome(state: GameState){
  let value = incomeUpgrades.reduce((sum,item)=>{
    return sum + item.income *(state.quantities[item.id]??0);
  },0)
  if (state.purchased.includes('patch')) value *= 1.05;
  if (state.purchased.includes('cap')) value *= 1.05;

  return value * (1 + state.levels.income * 0.01);
}

//хранение состояния
export function GameProvider({ children }: { children: ReactNode }) {
  const [shop, setShop] = useState<GameState>({
    papers: 0,
    purchased: [],
    quantities: {},
    clips: 0,
    rebirths: 0,
    levels: { click: 0, income: 0, discount: 0 },
  });

  const papersPerClick = calculateClick(shop);
  const papersPerSecond = calculateIncome(shop);
  const priceMultiplier = 1 - shop.levels.discount * 0.0025;

  useEffect(() => {
    const timer = setInterval(() => {
      setShop((previous) => {
        const income = calculateIncome(previous);

        if (income === 0) return previous;

        return { ...previous, papers: previous.papers + income };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  //начисление за клик
  function collectPaper() {
    setShop((previous) => ({
      ...previous,
      papers: previous.papers + calculateClick(previous),
    }));
  }


  //перерождение
  function rebirth(expectedReward: number) {
    setShop((previous) => {
      const reward = getRebirthReward(previous.papers);

      if (reward < 1 || reward !== expectedReward) return previous;

      return {
        ...previous,
        papers: 0,
        purchased: [],
        quantities: {},
        clips: previous.clips + reward,
        rebirths: previous.rebirths + 1,
      };
    });
  }


  //покупка постоянного улучщения
  function buyPermanent(id: UpgradeId) {
    setShop((previous) => {
      const upgrade = permanentUpgrades.find((item) => item.id === id);

      if (!upgrade) return previous;

      const level = previous.levels[id];
      const price = getPermanentPrice(upgrade.basePrice, level);

      if (level >= upgrade.maxLevel || previous.clips < price) {
        return previous;
      }

      return {
        ...previous,
        clips: previous.clips - price,
        levels: { ...previous.levels, [id]: level + 1 },
      };
    });
  }

  return (
    <GameContext.Provider value={{ shop, setShop, papersPerClick, papersPerSecond, priceMultiplier, collectPaper, rebirth, buyPermanent }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame должен находиться внутри GameProvider');
  }

  return context;
}