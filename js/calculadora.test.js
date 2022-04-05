import { soma, sub, multi, divi, bhaskara} from './calculadora.js'

it('Soma de dois positivos', ()=>{
    expect(soma(12,4)).toBe(16)
})

it('Subtracao de dois positivos', ()=>{
    expect(sub(27,5)).toBe(22)
})

it('Multiplicação de dois positivos', ()=>{
    expect(multi(7,6)).toBe(42)
})

it('Divisão de dois positivos', ()=>{
    expect(divi(25,5)).toBe(5)
})

it('Equacao completa', ()=>{
    expect(bhaskara(1,2,-15)).toMatchObject({"x1": 3, "x2": -5})
})

it('Equacao incompleta', ()=>{
    expect(bhaskara(3,0,-12)).toMatchObject({"x1": 2, "x2": -2})
})

it('Equacao sem resposta', ()=>{
    expect(bhaskara(7,5,5)).toMatchObject({"x1": NaN, "x2": NaN})
})

