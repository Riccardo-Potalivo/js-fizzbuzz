const containerEl = document.getElementById('boxWrapper');

let boxContent
let bgBox

for(let i = 1; i <= 100; i ++)
{
    console.log(i);
    if(i % 3 === 0 && i % 5 === 0)
    {
        boxContent = 'FizzBuzz'
        console.log('FizzBuzz')
        bgBox = 'bg_fizzbuzz';
    }
    else if(i % 5 === 0)
    {
        boxContent = 'Buzz'
        console.log('Buzz')
        bgBox = 'bg_buzz';
    }
    else if(i % 3 === 0)
    {
        boxContent = 'Fizz'
        console.log('Fizz')
        bgBox = 'bg_fizz';
    }
    else
    {
        boxContent = i
        console.log(i)
        bgBox = 'bg_number';
    }

    
    const boxEl = document.createElement('div');
    boxEl.className = `box_number ${bgBox} d-flex justify-content-center align-items-center rounded-4 fw-bold`;
    boxEl.innerHTML = boxContent
    containerEl.append(boxEl)
};