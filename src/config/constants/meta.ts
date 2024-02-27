import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DexRZ',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by DexRZ), NFTs, and more, on a platform you can trust.',
  image: 'https://Dex.rz.game/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DexRZ')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('DexRZ')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('DexRZ')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('DexRZ')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('DexRZ')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('DexRZ')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DexRZ')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DexRZ')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('DexRZ')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DexRZ')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('DexRZ')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DexRZ')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DexRZ')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DexRZ')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DexRZ')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('DexRZ')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('DexRZ')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('DexRZ')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('DexRZ Info & Analytics')}`,
        description: 'View statistics for DexRZ exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('DexRZ Info & Analytics')}`,
        description: 'View statistics for DexRZ exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('DexRZ Info & Analytics')}`,
        description: 'View statistics for DexRZ exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('DexRZ')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('DexRZ')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('DexRZ')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('DexRZ')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('DexRZ Squad')} | ${t('DexRZ')}`,
      }
    default:
      return null
  }
}
