import { API_URL, REVALIDATE_SITE_COMPONENTS } from '@/constants/constants'
import { AdventuresType, LinkComponentType } from '../types/siteComponentsType'

export const getNavMenuList= async () => {
  try {
    const res = await fetch(`${API_URL}/menuList`, {next: {revalidate: REVALIDATE_SITE_COMPONENTS}})

    return await res.json() as Array<LinkComponentType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const getCategoryList= async () => {
  try {
    const res = await fetch(`${API_URL}/categoryList`, {next: {revalidate: REVALIDATE_SITE_COMPONENTS}})

    return await res.json() as Array<LinkComponentType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const getAdventuresList= async () => {
  try {
    const res = await fetch(`${API_URL}/adventuresList`, {next: {revalidate: REVALIDATE_SITE_COMPONENTS}})

    return await res.json() as Array<AdventuresType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}