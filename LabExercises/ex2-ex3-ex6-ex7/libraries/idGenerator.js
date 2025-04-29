//changing the library so thay one can generate random IDs

const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000); // Generate a random number between 0 and 999999
};

module.exports = {generateRandomId};  