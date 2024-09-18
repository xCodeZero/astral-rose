'use client'

import "../../../styles/panel.scss"
import PanelMenu from "../../../components/panel/PanelMenu"

import { useState } from 'react';

export default function Panel() {
    const [activeTab, setActiveTab] = useState('password');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const settingPassword = [
        {
            inputType: 'password',
            inputPlaceHolder: 'Actual password'
        },

        {
            inputType: 'password',
            inputPlaceHolder: 'New password'
        },

        {
            inputType: 'password',
            inputPlaceHolder: 'Confirm new password'
        }
    ]

    const settingName = [
        {
            inputType: 'text',
            inputPlaceHolder: 'Inform your new name'
        }
    ]

    return (

        <div className='panel'>

            <div className="container">

                <PanelMenu />

                <div className="panel_content">

                    <div className="panel_content-wrapper">

                        <h1>Settings</h1>

                        <div className="panel_tab-buttons">
                            <button onClick={() => handleTabChange('password')} className={activeTab === 'password' ? 'active' : ''}>
                                Change Password
                            </button>

                            <button onClick={() => handleTabChange('name')} className={activeTab === 'name' ? 'active' : ''}>
                                Change Name
                            </button>
                        </div>


                        {activeTab === 'password' && (
                            <form>

                                {settingPassword.map((setting, index) => (
                                    <div key={index}>
                                        <input type={setting.inputType} placeholder={setting.inputPlaceHolder} />
                                    </div>
                                ))}

                                <button><span>Change</span></button>
                            </form>
                        )}


                        {activeTab === 'name' && (
                            <form>
                                {settingName.map((setting, index) => (
                                    <div key={index}>
                                        <input type={setting.inputType} placeholder={setting.inputPlaceHolder} />
                                    </div>
                                ))}

                                <button><span>Change</span></button>
                            </form>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}
