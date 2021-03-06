import { Order, OrderStore } from '../../models/order'

const store = new OrderStore()

describe('Order Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined()
  })
  it('should have a show method', () => {
    expect(store.index).toBeDefined()
  })

  it('should have a create method', () => {
    expect(store.index).toBeDefined()
  })
  it('should have an add product method', () => {
    expect(store.addProduct).toBeDefined()
  })
  it('create method should create and return an order', async () => {
    const order: Order = <Order>{
      status: 'active',
      user_id: 1
    }
    const order2: Order = <Order>{
      status: 'completed',
      user_id: 1
    }
    let result = await store.create(order)
    expect(result).toEqual(
      jasmine.objectContaining({ status: 'active', user_id: '1' })
    )
    result = await store.create(order2)
    expect(result).toEqual(
      jasmine.objectContaining({ status: 'completed', user_id: '1' })
    )
  })
  it('index method should return a list of orders', async () => {
    const result = await store.index()
    //console.log(result)
    expect(result[0].status).toEqual('active')
    expect(result[1].status).toEqual('completed')
    expect(result[2].status).toEqual('active')
    expect(result[3].status).toEqual('completed')
  })
  it('show method should return the requested order', async () => {
    const result = await store.show('2')
    expect(result.status).toEqual('active')
  })
  it('add product method should return qty, order_id, and product_id', async () => {
    const result = await store.addProduct(6, '2', '1')
    //console.log(result)
    expect(result).toEqual(
      jasmine.objectContaining({
        id: 2,
        quantity: 6,
        product_id: '1',
        order_id: '2'
      })
    )
  })
})
