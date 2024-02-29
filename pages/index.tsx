import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="component-content">
        <div className="row">
          <div className="component container container-default basis-full hidden sm:block">
            <div className="component-content">
              <div className="row">
                <div className="component rich-text basis-full sm:block">
                  <div className="component-content">
                    <div>
                      <p>PC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component container container-default basis-full block sm:hidden">
            <div className="component-content">
              <div className="row">
                <div className="component rich-text basis-full">
                  <div className="component-content">
                    <div>
                      <p>Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
