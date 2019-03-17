export const f = async () => {
    const a = await Promise.resolve('a'),
        b = await Promise.resolve('b');

    return a + b
}