import "../../styles/panel.scss"
import PanelMenu from "../../components/panel/PanelMenu"

export default function Panel() {

    const overviewItems = [
        {
            type: 'Name',
            info: 'Daniel',
        },

        {
            type: 'E-mail',
            info: 'uni@gmail.com',
        },

        {
            type: 'Joined',
            info: 'July 20 2024 19:04 PM',
        },

        {
            type: 'Last seen online',
            info: 'July 21 2024 19:09 PM',
        },

        
        {
            type: 'IP',
            info: '127.0.0.1',
        },
    ]


    return (

        <div className='panel'>

            <div className="container">

                <PanelMenu />

                <div className="panel_content">
                    <div className="panel_content-wrapper">
                        <h1>Overview</h1>

                        <ul className="overview_list">
                            {overviewItems.map((item, index) => (
                                <li key={index}>
                                    <span>{item.type}</span>
                                    <p>{item.info}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}
