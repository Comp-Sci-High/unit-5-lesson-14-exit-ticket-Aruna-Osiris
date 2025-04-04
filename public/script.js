// Create and call a function that tests your update route handler [2 pts]
// Make sure that the function takes the name of the potion as a parameter
// There are already potion's with the label polyjuice or amortentia

const base = "https://improved-system-r4p4wp654wxjcpr9g-3000.app.github.dev"

async function patchPotion(name) {
    try {
        const response = await fetch(base + "/update/" + name , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                endangered: true,
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
patchPotion("polyjuice")
patchPotion("amortentia")