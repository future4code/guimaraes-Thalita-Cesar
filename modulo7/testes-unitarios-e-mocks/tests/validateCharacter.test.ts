import { validateCharacter } from "../src/validateCharacter"


describe('Testing validateCharacter', ()=> {

  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });


    test('Should return false for life = 0', ()=> {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            defense: 500,
            strength: 1000
        })

        expect(result).toBe(false)
    })

    test('Should return false for strength = 0', ()=> {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            defense: 300,
            strength: 0
        })

        expect(result).toBe(false)
    })


    test('Should return false for defense = 0', ()=> {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            defense: 0,
            strength: 500
        })

        expect(result).toBe(false)
    })

    test('Shoul return false for life or defense or strength = negative value', ()=> {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            defense: -1,
            strength: 100
        })

        expect(result).toBe(false)
    })

    test('Shoulf return true for all valid inputs', ()=> {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            defense: 750,
            strength: 900
        })

        expect(result).toBe(true)
    })
})