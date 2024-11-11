import React from "react";
import {action} from '@storybook/addon-actions'
import { Stars } from "../tasks/taskForConditional-Rendering/Star";

export default {
    title: 'Rating Storis',
    component: Stars
}

export const EmptyStars = () => <Stars basicValue={0}/>
export const Star1 = () => <Stars basicValue={1}/>
export const Star2 = () => <Stars basicValue={2}/>
export const Star3 = () => <Stars basicValue={3}/>
export const Star4 = () => <Stars basicValue={4}/>
export const Star5 = () => <Stars basicValue={5}/>
