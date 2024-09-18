'use client'

import "../../styles/panel.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function PanelMenu() {

    const currentRoute = usePathname();
    const activeStyle = ' active';
    const nonActiveStyle = ' ';


    const profile = {
        avatar: '/images/news-1.jpg',
        name: 'Daniel',
        email: 'uni@gmail.com'
    }

    const panelMenu = [
        {
            url: '/panel',
            currentUrl: '/panel',
            icon: '/images/panel/home.png',
            title: 'Overview'
        },

        {
            url: '/panel/in-game',
            currentUrl: '/panel/in-game',
            icon: '/images/panel/game.png',
            title: 'In-Game Menu'
        },

        {
            url: '/panel/premium',
            currentUrl: '/panel/premium',
            icon: '/images/panel/premium.png',
            title: 'Premium Services',
            style: 'premium'
        },

        {
            url: '/panel/settings',
            currentUrl: '/panel/settings',
            icon: '/images/panel/settings.png',
            title: 'Settings'
        },
    ]


    return (

        <div className="panel_menu">
            <div>
                <span>
                    <img src={profile.avatar} alt="" />
                </span>

                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
            </div>

            <ul>
                {panelMenu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url} className={`${item.style} ${currentRoute === item.currentUrl ? activeStyle : nonActiveStyle}`}>
                            <img src={item.icon} alt="" />
                            {item.title}
                        </Link>
                    </li>
                ))}

                <li className="panel_logout">
                    <button>
                        <img src="/images/panel/logout.png" alt="" />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}
