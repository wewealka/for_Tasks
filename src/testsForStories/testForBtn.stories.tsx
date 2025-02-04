import { MainButton } from "../components/Button";
import { action } from '@storybook/addon-actions';

export default {
    title: "ButtonsStory"
}

const actionWide = () => {
    action('viva')();
    action("21")();
    action('Minsk')();
};

export const Btn1 = () => <MainButton name={"MyYouTubeChanel-1"} callBack={actionWide} />;
export const Btn2 = () => <MainButton name={"MyYouTubeChanel-2"} callBack={action('vova')} />;
export const Btn3 = () => <MainButton name={"3foo"} callBack={action('i am stupid button')} />;
