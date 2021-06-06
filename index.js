const devLocalStorage = (valKey = "authorization") => {
    const MAIN_KEY = "devpoint.";
    const localKey = `${MAIN_KEY}${valKey}`;
    const save = (data) => {
        console.log(`调用方法save: ${localKey}`);
    };

    const get = () => {
        console.log(`调用方法get: ${localKey}`);
    };
    /**
     * 清楚localStorage
     */
    const clear = () => {
        console.log(`调用方法clear: ${localKey}`);
    };
    return {
        save,
        get,
        clear,
    };
};

module.exports = devLocalStorage();
