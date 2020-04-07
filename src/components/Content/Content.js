import React from 'react';

import './Content.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Foods from '../Foods/Foods';
import { useEffect } from 'react';


const Content = () => {

    
    const[Food, setFood] = useState(fakeData);
    const [currentFood, setCurrentFood] = useState([]);

    useEffect(() => {
        const FindingFood = Food.filter(fd => fd.category === 'lunch');
        setCurrentFood();
        setCurrentFood(FindingFood);
        console.log(currentFood);
        document.getElementById('breakfast').classList.remove('active');
        document.getElementById('lunch').classList.add('active');
        document.getElementById('dinner').classList.remove('active');
    }, [])
    
    const handleBreakfast = () => {
        const FindingFood = Food.filter(fd => fd.category === 'breakfast');
        setCurrentFood();
        setCurrentFood(FindingFood);
        console.log(currentFood);
        document.getElementById('breakfast').classList.add('active');
        document.getElementById('lunch').classList.remove('active');
        document.getElementById('dinner').classList.remove('active');
    }

    const handleLunch = () => {

        const FindingFood = Food.filter(fd => fd.category === 'lunch');
        setCurrentFood();
        setCurrentFood(FindingFood);
        console.log(currentFood);
        document.getElementById('breakfast').classList.remove('active');
        document.getElementById('lunch').classList.add('active');
        document.getElementById('dinner').classList.remove('active');

    }

    


    const handleDinner = () => {
        const FindingFood = Food.filter(fd => fd.category === 'dinner');
        setCurrentFood();
        setCurrentFood(FindingFood);
        console.log(currentFood);

        document.getElementById('breakfast').classList.remove('active');
        document.getElementById('lunch').classList.remove('active');
        document.getElementById('dinner').classList.add('active');
    }
    

   
       return (
        <div>
            <div className="text-center my-5">
                <span id="breakfast" onClick={handleBreakfast} className="time">Breakfast</span>
                <span id="lunch" onClick={handleLunch} className="time">Lunch</span>
                <span id="dinner" onClick={handleDinner} className="time">Dinner</span>
            </div>
            <div className=" container food-items row justify-content-center">
                {
                    currentFood.map(food => <Foods food = {food}></Foods>)
                }
            </div>
            <div className="text-center">
                <button disabled  className="btn btn-danger">Check out your cart</button>
            </div>
        </div>
    );
};

export default Content;