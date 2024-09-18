import "../../../styles/panel.scss"
import PanelMenu from "../../../components/panel/PanelMenu"


import Link from 'next/link'

export default function InGame() {

    const gameList = [
        {
            url: '/',
            title: 'Characters',
        },

        {
            url: '/',
            title: 'Warehouse',
        },

        {
            url: '/',
            title: 'Achievements',
        },

    ]

    return (

        <div className='panel'>

            <div className="container">

                <PanelMenu />

                <div className="panel_content">

                    <div className="panel_content-wrapper">

                        <h1>In-Game Menu</h1>

                        <ul className="button_list game_list">
                            {gameList.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.url}>
                                        <span>
                                            {item.title}

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                                        </span>
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>

            </div>

        </div>
    );
}
