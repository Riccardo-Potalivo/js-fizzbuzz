const containerEl = document.getElementById('boxWrapper');

let boxContent

for(let i = 1; i <= 100; i ++)
{
    console.log(i);
    if(i % 3 === 0 && i % 5 === 0)
    {
        boxContent = 'FizzBuzz'
        console.log('FizzBuzz')
    }
    else if(i % 5 === 0)
    {
        boxContent = 'Buzz'
        console.log('Buzz')
    }
    else if(i % 3 === 0)
    {
        boxContent = 'Fizz'
        console.log('Fizz')
    }
    else
    {
        boxContent = i
        console.log(i)
    }

    

    const boxEl = document.createElement('div');
    boxEl.className = `box_number`;
    boxEl.innerHTML = boxContent
    containerEl.append(boxEl)
};