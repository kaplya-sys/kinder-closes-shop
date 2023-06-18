import { ProductType } from '@/types/productType'

export const checkPresence = (checkedList: ProductType[], addedObj: ProductType): Array<ProductType> => {
  if (checkedList.length) {
    const result = checkedList.find(item => item.id === addedObj.id)
    
    if (result) {
        return checkedList
    } else {
        checkedList.unshift(addedObj)
        return checkedList
    }
  }
  checkedList.unshift(addedObj)
  return checkedList
}