const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const a = Math.floor(Math.random() * 100);
        if (a >= 50) resolve(a);
        else reject(a);
    }, 1000);
});

export const usPromise = async () => {
    //1 async / await
    try {
        const data = await promise;
        console.log('fetched data 1', data);
    } catch (error) {
        console.error('promise error 1', error);
    } finally {
        console.log('promse gotov 1');
    }
};

//2 then catch finaly

export const usPromiseOld = () => {
    promise
        .then((data) => {
            console.log('data promise 2', data);
        })
        .catch((error) => {
            console.error('error in promise 2', error);
        })
        .finally(() => {
            console.log('promise gotov 2');
        });
};
