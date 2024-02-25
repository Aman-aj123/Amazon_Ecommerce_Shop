import React from 'react';
import Top_Products from '../Top_Products';
import { useNavigate, Link } from 'react-router-dom';

const ProductItems = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scroll(0, 0);
    navigate(path);
  }

  return (
    <>
      <Top_Products isBorder="false" categoryValue="allProducts" topProductTitle="Top seller's of this year !" />

      <div className="bx-item-cont">
        <div className="bx-item cont-bx" onClick={() => { handleNavigate("/search/gadgets") }} >
          <h3>Gaming Accessories</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                alt="headset not found"
              />
              <p>Headset</p>
            </div>
            <div className="bx-fr-img">
              <img 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                alt="keyboard not found"
              />
              <p>Keyboard</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                alt="mouse not found"
              />
              <p>Mouse</p>
            </div>
            <div className="bx-fr-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                alt="chair not found"
              />
              <p>Chair</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item single-item" onClick={() => { handleNavigate("/search/toys") }} >
          <h3>Toys Under $30</h3>
          <div className="single-grid-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
              alt="toy not found"
            />
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item single-item" onClick={() => { handleNavigate("/search/gadgets") }} >
          <h3>Electronics</h3>
          <div className="single-grid-img">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
              alt="electronics not found"
            />
          </div>
          <Link to="/">See more</Link>
        </div>
      </div>


      <div className="bx-item-cont">
        <div className="bx-item single-item cont-bx" onClick={() => handleNavigate('/search/home')}>
          <h3>Home & Kitchen Under $30</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg" alt="Home & Kitchen not found" />
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item single-item" onClick={() => { handleNavigate("/search/health") }} >
          <h3>Health & Personal Care</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" alt="Health & Personal Care not found" />
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item" onClick={() => { handleNavigate("/search/home") }} >
          <h3>Refresh Your Space</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="Dining not found" />
              <p>Dining</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Home not found" />
              <p>Home</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Kitchen not found" />
              <p>Kitchen</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="Health and Beauty not found" />
              <p>Health and Beauty</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>
      </div>


      <div className="bx-item-cont">

        <div className="bx-item single-item cont-bx" onClick={() => handleNavigate('/search/gadgets')} >
          <h3>Computers & Accessories</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" alt="Computers & Accessories not found" />
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item single-item" onClick={() => { handleNavigate("/search/womens") }} >
          <h3>Beauty picks</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt="Beauty picks not found" />
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item" onClick={() => handleNavigate('/search/womens')} >
          <h3>Shop deals in Fashion</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Fashion - Dining not found" />
              <p>Dining</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Fashion - Home not found" />
              <p>Home</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Fashion - Kitchen not found" />
              <p>Kitchen</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Fashion - Health and Beauty not found" />
              <p>Health and Beauty</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>
      </div>

      {/* banners */}
      <Top_Products isBorder="false" categoryValue="home" topProductTitle="Top Kitchen Products" />
      <Top_Products isBorder="false" categoryValue="gadgets" topProductTitle="Electronics Best seller's" />

      <div className="bx-item-cont">
        <div className="bx-item single-item cont-bx" onClick={() => handleNavigate('/search/womens')}>
          <h3>Discover fashion trends</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg" alt="" />
          </div>
          <Link to="/">See more</Link>
        </div>
        <div className="bx-item single-item" onClick={() => handleNavigate('/gadgets')}>
          <h3> Deals in Tools and Home Improvement</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/Holiday2022/Graphics/XCM_CUTTLE_1475305_2610205_379x304_1X_en_US._SY304_CB608600856_.jpg" alt="" />
          </div>
          <Link to="/">See more</Link>
        </div>
        <div className="bx-item single-item" onClick={() => handleNavigate('/allProducts')}>
          <h3>For your Fitness Needs</h3>
          <div className="single-grid-img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg" alt="" />
          </div>
          <Link to="/">See more</Link>
        </div>
      </div >

      <div className="bx-item-cont">
        <div className="bx-item  cont-bx" onClick={() => handleNavigate('/search/gadgets')}>
          <h3>Gaming merchandise</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg" alt="not found" />
              <p>Apparel</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg" alt="not found" />
              <p>Hats</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg" alt="not found" />
              <p>Action figures</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg" alt="not found" />
              <p>Mugs</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item" onClick={() => handleNavigate('/allProducts')}>
          <h3>Deals on most-loved finds</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_332_DQC_CML01_HOME_1x._SY116_CB577173228_.jpg" alt="not found" />
              <p>Home</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_330_DQC_CML01_W_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>Women's fashion</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_331_DQC_CML01_M_1x._SY116_CB577173228_.jpg" alt="not found" />
              <p>Men's fashion</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_333_DQC_CML01_BEAUTY_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>Beauty</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>

        <div className="bx-item" onClick={() => handleNavigate('/toys')}>
          <h3>Score big deals on toys</h3>
          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_34_DQC_TOYSBIGDEAL_3-5_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>2-8 years</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_197_DQC_TOYSBIGDEAL_6-8_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>1-2 years</p>
            </div>
          </div>

          <div className="img-grid flex">
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_198_DQC_TOYSBIGDEAL_9-11_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>1-6 years</p>
            </div>
            <div className="bx-fr-img">
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_199_DQC_TOYSBIGDEAL_12up_1x._SY116_CB577173231_.jpg" alt="not found" />
              <p>1-9 years</p>
            </div>
          </div>
          <Link to="/">See more</Link>
        </div>
      </div>

      <Top_Products isBorder="false" categoryValue="women's clothing" topProductTitle="Best deal for women fashion's" />

      <Top_Products isBorder="false" categoryValue="toys" topProductTitle="Be the kid's always happy" />

      <Top_Products isBorder="false" categoryValue="men's clothing" topProductTitle="Mugs Marvel, Explore Our Collection" />


      <Top_Products isBorder="false" categoryValue="mugs" topProductTitle="" />


    </>
  );
}

export default ProductItems;
