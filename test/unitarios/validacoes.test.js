import validacoes from "../../src/services/validacoes";

const testar = () => {
    describe("Verificando se o valor é do tipo string", () => {
        test("teste com uma string", () => {
            expect(validacoes.validaString("sou uma string")).toBe(true)
        })
        test("teste com um Number", () => {
            expect(validacoes.validaString(1)).toBe(false)
        })
    })
}

testar()