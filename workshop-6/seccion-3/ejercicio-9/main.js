let time = Number(prompt('Ingrese cuántos segundos de retardo desea ingresar'));
time = parseFloat(time * 1000);

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('the data is empty');
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        }, time);
    });
};

getData()
    .then(data => console.table(data))
    .catch(error => console.error(error));
