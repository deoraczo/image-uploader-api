import app from "./app"

const PORT = process.env.PORT || 9000;

function main(): void {
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT}`)
    })
}

main()