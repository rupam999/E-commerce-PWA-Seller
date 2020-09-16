import React, {useState, useEffect} from 'react';
import { Drawer, Modal } from 'antd-mobile';
import { useAddToHomescreenPrompt } from "../../../components/AddPrompt";
import { HomeScreenHeader } from '../Header';
import WindowDimensions from '../../../components/WindowDimensions';
import DrawerContent from './components/DrawerContent';
const alert = Modal.alert;

export const HomeScreen = () => {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = useState(false);
    const [menu, toggle] = useState(false);
    const {width} = WindowDimensions();
    const hide = () => {
        setVisibleState(false);
    }

    useEffect(() => {
        if (prompt) {
            setVisibleState(true);
        }
    }, [prompt]);

    const showAlert = () => {
        const showChromeAddToHomeScreenPrompt = () => {
            hide()
            alertInstance.close();
            promptToInstall()
            hide()
        }
        const alertInstance = alert('E-commerce', 'Want to install the App ???', [
          { text: 'Cancel', onPress: hide, style: 'default' },
          { text: 'OK', onPress: () => showChromeAddToHomeScreenPrompt() },
        ]);
        setTimeout(() => { 
          console.log('auto close');
          alertInstance.close();
        }, 5000);
    };

    const onOpenChange = () => {
        toggle(!menu);
    }
    
    const sidebar = (
        <div style={{ width: width*.75, maxWidth: 290 }}>
            <DrawerContent />
        </div>
    )

    return(
        <div 
            style={{
                width: '100%', 
                minHeight: '100%',
            }}>
            
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
                >
                <HomeScreenHeader menu={menu} toggle={toggle} pageHeading="E-commerce Seller" />
                <div style={{paddingTop: 101}}>
                    {/* {isVisible ? showAlert() : null} */}
                    <p>Home Screen</p>
                </div>
            </Drawer>

        </div>
    );
}