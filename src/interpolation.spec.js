import { linear, quadratic, cubic } from '../src/interpolation'

describe('Interpolation', () => {
  it('linear', () => {
    expect(linear(0.5, -100, 100)).to.be.equal(0)
    expect(linear(0, -100, 100)).to.be.equal(-100)
    expect(linear(1, -100, 100)).to.be.equal(100)
  })
  it('quadratic', () => {
    expect(quadratic(0.5, -100, 0, 100)).to.be.equal(0)
    expect(quadratic(0, -100, 0, 100)).to.be.equal(-100)
    expect(quadratic(1, -100, 0, 100)).to.be.equal(100)
  })
  it('cubic', () => {
    expect(cubic(0.5, -100, 0, 0, 100)).to.be.equal(0)
    expect(cubic(0, -100, 0, 0, 100)).to.be.equal(-100)
    expect(cubic(1, -100, 0, 0, 100)).to.be.equal(100)
  })
})
