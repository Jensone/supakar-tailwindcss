import { useState } from 'react';
import './App.css';

// Cars
import original from '../public/img/original.png';
import blue from '../public/img/blue.png';
import yellow from '../public/img/yellow.png';
import green from '../public/img/green.png';

function App() {
    // Variables d'état (state)
    const [title, setTitle] = useState('Silver Shark'); // Titre de la page
    const [car, setCar] = useState(original); // Image de la voiture
    const [color, setColor] = useState(''); // Couleur de la voiture

    // Sélection de la couleur avec la fonction selectColor
    const selectColor = (e) => {
        // Récupérer la couleur sélectionnée
        const colorSelected = e.target.getAttribute('data-color');

        // On change la couleur selon la couleur sélectionnée
        switch (colorSelected) {
            case 'original':
                setCar(original);
                setTitle('Silver Shark');
                setColor('car-' +colorSelected)
                break;
            case 'blue':
                setCar(blue);
                setTitle('Marina Blue');
                setColor('car-' +colorSelected)
                break;
            case 'yellow':
                setCar(yellow);
                setTitle('Sunny Yellow');
                setColor('car-' +colorSelected)
                break;
            case 'green':
                setCar(green);
                setTitle('Grass Green');
                setColor('car-' +colorSelected)
                break;
            default:
                setCar(original);
                setTitle('Silver Shark');
                break;
        }
    };
    return (
        <>
            <div className="car flex justify-center items-center w-full">
                <img src={car} className={ 'car-image w-96 sm:w-62 md:w-78 ' + color } alt="Model color car" />
            </div>
            <h1 className="text-center font-bold italic my-5">{title}</h1>
            <div className="selection flex flex-col gap-5 justify-center items-center">
                <div className="colors flex gap-2 sm:flex-wrap">
                    <button onClick={selectColor} data-color="original" className="bg-slate-500 text-white rounded-none">
                        Original
                    </button>
                    <button onClick={selectColor} data-color="blue" className="bg-blue-500 text-white rounded-none">
                        Blue
                    </button>
                    <button onClick={selectColor} data-color="yellow" className="bg-yellow-500 text-white rounded-none">
                        Yellow
                    </button>
                    <button onClick={selectColor} data-color="green" className="bg-green-500 text-white rounded-none">
                        Green
                    </button>
                </div>
                <p>
                    Designed by 
                    <a href="https://github.com/Jensone">
                        <code> Your GitHub Username </code>
                    </a>
                </p>
            </div>
        </>
    );
}

export default App;
