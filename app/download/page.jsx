import "../../styles/download.scss";

export default function Download() {
  const download = [
    {
      link: "/",
      title: "Direct Link",
    },

    {
      link: "/",
      title: "MEGA",
    },

    {
      link: "/",
      title: "Google Drive",
    },
  ];

  const system = [
    {
      component: "CPU",
      minimum: "Intel i3-7100 / AMD Ryzen 3 1200",
      recommended: "Intel i5-7500 / AMD Ryzen 7 1700",
    },

    {
      component: "RAM",
      minimum: "8 GB",
      recommended: "12 GB",
    },

    {
      component: "Video Card",
      minimum: "NVIDIA Geforce GTX 760 / AMD Radeon R9 280",
      recommended: "NVIDIA Geforce GTX 970 / AMD Radeon R9 380",
    },

    {
      component: "Dedicated Video Card",
      minimum: "2048 MB",
      recommended: "2048 MB",
    },

    {
      component: "Pixel Shader",
      minimum: "5.0",
      recommended: "5.1",
    },

    {
      component: "Vertex Shader",
      minimum: "5.0",
      recommended: "5.1",
    },

    {
      component: "OS",
      minimum: "Windows 10 64-Bit",
      recommended: "Windows 10 64-Bit",
    },

    {
      component: "Free Disk Space",
      minimum: "80 GB",
      recommended: "80 GB",
    },
  ];

  return (
    <div className="download">
      <div className="download_header">
        <div className="download_header-content container">
          <h1>Download the Game</h1>
          <p>
            Tera Full Client <strong>18.9 GB</strong>
          </p>

          <div>
            <span>
              <p>
                Select download{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </p>
            </span>

            <ul>
              {download.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank">
                    <img src="/images/download/download.png" alt="" />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="download_header-character">
          <img src="/images/download_image.png" alt="" />
        </div>
      </div>

      <div className="download_systems container">
        <h1>System Requirements</h1>

        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Minimum</th>
              <th>Recommended</th>
            </tr>
          </thead>

          <tbody>
            {system.map((system, index) => (
              <tr key={index}>
                <td>{system.component}</td>
                <td>{system.minimum}</td>
                <td>{system.recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="download_drivers container"></div>
    </div>
  );
}
