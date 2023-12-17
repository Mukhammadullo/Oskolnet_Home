import './App.css'
import Card1 from './components/Card1'

function App() {

  return (
    <>

      {/* header */}
      <header className='flex m-[2%] justify-between items-center'>
        <img src='src/assets/Group 31 (2).png' className='w-[100px] h-[60px]' />
        <ul className='md:flex hidden'>
          <li className='m-[10px] text-[#263057] font-medium'>Тарифы для дома</li>
          <li className='m-[10px] text-[#263057] font-medium'>Тарифы для бизнеса</li>
          <li className='m-[10px] text-[#263057] font-medium'>Контакты</li>
        </ul>

        <div>
          <p className='font-bold'>+7 (4725) 43-97-20</p>
          <p>круглосуточно</p>
        </div>
        <div className='md:flex hidden'>
          <button className='w-[160px] h-[50px] mr-[8px] text-[white] rounded-[16px] bg-[#6984F0]'>Личный кабинет</button>
          <button className='w-[140px] h-[50px] bg-[#263057] text-[white] rounded-[16px]'>Оплатить</button>
        </div>

        <div className='md:hidden block'>
          <img src='src/assets/Group 759.png' />
        </div>

      </header>


      {/* se1 */}
      <div className='bg-[#263057]'>
        <section className='m-[4%]   p-[2%]'>

          <div className='md:flex justify-between  bg-[white] rounded-[12px]'>
            {/* left */}
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-bold text-[38px] ml-[40px] text-[#253058]'>ИНТЕРНЕТ </h1>
              <p className='text-[#253058] text-[18px] m-[20px]'>на высокой скорости</p>
              <button className='mob:w-[300px] md:w-[190px] h-[50px]  text-[white] rounded-[16px] bg-[#6984F0]'>Выбрать тариф</button>
            </div>

            {/* right */}

            <div className=''>
              <img src='src/assets/1.jpg' />
            </div>
          </div>
        </section>
      </div>

      {/* section2 */}

      <section className='m-[3%] shadow-xl p-[20px] rounded-[12px]'>
        <h1 className='text-[46px] font-bold text-[#263057] text-center '>тарифы для дома</h1>

        <ul className=' md:flex justify-between mt-[20px]'>
          <li className='font-bold'>Интернет</li>
          <li className='mob:m-[10px]'>Интернет + Кабельное ТВ</li>
          <li className='mob:m-[10px]'>Интернет + Smart TV</li>
          <li className='mob:m-[10px]'>Интернет + Телефония</li>
        </ul>


        {/* cards */}
        <div className='mob:overflow-scroll  flex justify-between mt-[30px]'>
          <Card1 title={'Medium'} intitle={'30 Мбит/с'} num={'300'} ></Card1>
          <Card1 title={'Total'} intitle={'60 Мбит/с'} num={'400'} ></Card1>
          <Card1 title={'Energy'} intitle={'70 Мбит/с'} num={'400'} ></Card1>
          <Card1 title={'Ultra'} intitle={'80 Мбит/с'} num={'500'} ></Card1>
          <Card1 title={'Rush'} intitle={'90 Мбит/с'} num={'600'} ></Card1>
        </div>

      </section>



      {/* sec3 */}

      <section className='m-[3%] bg-[#263057] p-[20px] rounded-[12px]'>
        <h1 className='font-bold text-[white] m-[10px] text-[36px] '>Трудно выбрать? Мы поможем! </h1>
        <div className='md:flex'>
          <input placeholder='+7=(-)___ -- -- --' className='mob:w-[300px] md:w-[350px] h-[40px] rounded-[10px] m-[5px] p-[4px]' />
          <input placeholder='Как Вас зовут? *' className='mob:w-[300px] md:w-[350px] h-[40px] rounded-[10px] m-[5px] p-[4px]' />
          <button className='mob:w-[300px] md:w-[140px] h-[50px] bg-[#6984F0] text-[white] rounded-[16px]'>Оплатить</button>
        </div>

        <p className='text-[white]'>Нажимая на кнопку, я даю согласие на обработку персональных данных</p>
      </section>



      {/* sec4 */}
      <section className='m-[3%] bg-[#263057] p-[20px] rounded-[12px]'>
        <h1 className='font-bold text-[white] m-[10px] text-[36px] '>Проверить возможность подключения по вашему адресу </h1>
        <div className='md:flex'>
          <input placeholder='Улица' className='mob:w-[300px] md:w-[350px] h-[40px] rounded-[10px] m-[5px] p-[10px]' />
          <input placeholder='Дом' className='mob:w-[300px] md:w-[200px] h-[40px]   rounded-[10px] m-[5px] p-[10px]' />
          <button className='mob:w-[300px] md:w-[140px] h-[50px] bg-[#6984F0] text-[white] rounded-[16px]'>Оплатить</button>
        </div>
      </section>


      {/* section5 */}
      <section className='m-[3%] bg-[#263057] p-[20px] rounded-[12px] md:flex justify-evenly items-center'>
        <h1 className='font-bold text-[white] m-[10px] text-[36px] '>Проверить скорость интернета</h1>
        <div>
          <button className='mob:w-[300px] md:w-[140px] h-[50px] bg-[#6984F0] text-[white] rounded-[16px]'>Оплатить</button>
        </div>
      </section>



      {/* section6 */}
      <section className='m-[3%]'>
        <h1 className='font-bold text-center text-[#263057] text-[46px]'>О компании</h1>

        <div className='md:flex justify-around items-center '>

          <div>
            <img src='src/assets/image 5 (2).png' />
          </div>

          <div>
            <p className='m-[20px]'>
              Сегодня – это крупнейшая компания в Старом Осколе с широким  <br />спектром телекоммуникационных услуг: Интернет, телефония, IP <br /> телевидение, видеонаблюдение.
            </p>
            <p className='m-[20px]'>
              Сегодня – это крупнейшая компания в Старом Осколе с широким  <br />спектром телекоммуникационных услуг: Интернет, телефония, IP <br /> телевидение, видеонаблюдение.
            </p>

          </div>

        </div>

        <div className='md:flex justify-center m-[20px]'>

          <button className='mob:w-[300px] w-[220px] h-[50px] rounded-[16px] mt-[10px] text-[white] bg-[#6984F0]'>Подробно о компании</button>
        </div>

      </section>

      {/* section7 */}

      <section>
        <h1 className='font-bold text-center bg-[#FFFFFF] text-[40px]'>Новости</h1>

        <div className='md:flex justify-evenly '>
          <div className='shadow-2xl p-[20px]'>
            <img src='src/assets/Rectangle 86.png' />
            <p className='m-[10px]'>05.03.2022</p>
            <p>05 марта 2022 с 17:00 до 23:00 на сети <br /> интернет будут проводиться планово-<br /> профилактические работы. </p>
            <p className='text-[#6984F0]  m-[10px]'>Подробнее</p>
          </div>

          <div className='shadow-2xl p-[20px]   '>
            <img src='src/assets/Rectangle 175.png' />
            <p className='m-[10px]'>05.03.2022</p>
            <p>05 марта 2022 с 17:00 до 23:00 на сети <br /> интернет будут проводиться планово-<br /> профилактические работы. </p>
            <p className='text-[#6984F0] m-[10px]'>Подробнее</p>
          </div>

          <div className='shadow-2xl p-[20px]'>
            <img src='src/assets/Rectangle 177.png' />
            <p className='m-[10px]'>05.03.2022</p>
            <p>05 марта 2022 с 17:00 до 23:00 на сети <br /> интернет будут проводиться планово-<br /> профилактические работы. </p>
            <p className='text-[#6984F0] m-[10px] '>Подробнее</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button className='mob:w-[300px] w-[180px] h-[50px] m-[20px] bg-[#6984F0] text-[white] rounded-[16px]'>Все новости</button>
        </div>

      </section>


      {/* section8 */}

      <section className='m-[3%]'>
        <h1 className='font-bold text-center bg-[#FFFFFF] text-[40px]'>Документы</h1>

        <div className='md:flex justify-evenly bg-[#F1F2F4]  m-[20px] p-[30px] rounded-[12px]'>
          <div className='flex items-center mob:m-[15px]'>
            <img src='src/assets/Group 715.png' />
            <p className='ml-[10px]'>Договор оферты на оказание <br /> услуг связи (Интернет)</p>
          </div>
          <div className='flex items-center mob:m-[15px]'>
            <img src='src/assets/Group 715.png' />
            <p className='ml-[10px]'>Договор оферты на оказание <br /> услуг связи (Интернет)</p>
          </div>
          <div className='flex items-center mob:m-[15px]'>
            <img src='src/assets/Group 715.png' />
            <p className='ml-[10px]'>Лицензия 1</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button className='mob:w-[300px] w-[180px] h-[50px] m-[20px] bg-[#6984F0] text-[white] rounded-[16px]'>Все документы</button>
        </div>

      </section>


      {/* section9 */}

      <section className='bg-[#F1F2F4] p-[50px]'>
        <h1 className='font-bold text-center  bg-[#F1F2F4] text-[40px]'>Партнеры</h1>

        <div className='md:flex mob:m-[40px] justify-around items-center  '>

          <div className='bg-[#FFFFFF] m-[20px] p-[20px] rounded-[14px]'>
            <img src='src/assets/image 1.png' />
          </div>

          <img src='src/assets/image 2 (1).png' className='m-[20px]' />
          <img src='src/assets/Group 788.png' className='m-[20px]' />

          <div className='bg-[#FFFFFF] m-[20px] p-[20px] rounded-[14px]'>
            <img src='src/assets/image 4.png' />
          </div>

        </div>
      </section>


      {/* section10 */}
      <section className='bg-[#263057] p-[50px]'>


        <div className='md:flex justify-around'>
          <ul>
            <li className='text-[white] m-[10px] mob:text-center'>О компании</li>
            <li className='text-[white] m-[10px] mob:text-center'>Новости</li>
            <li className='text-[white] m-[10px] mob:text-center'>Документы</li>

          </ul>

          <ul>
            <li className='text-[white] m-[10px] mob:text-center'>Тарифы для дома</li>
            <li className='text-[white] m-[10px] mob:text-center'>Тарифы для бизнеса</li>
            <li className='text-[white] m-[10px] mob:text-center'>Контакты</li>
          </ul>

          <ul>
            <li className='text-[white] m-[10px] mob:text-center'>Тест скорости</li>
            <li className='text-[white] m-[10px] mob:text-center'>Карта покрытия</li>

          </ul>

          <div>
            <div>
              <button className='mob:w-[290px] w-[180px] h-[50px] m-[20px] bg-[#6984F0] text-[white] rounded-[16px]'>Личный кабинет</button>
              <button className='mob:w-[290px] w-[180px] h-[50px] m-[20px] bg-[white] text-[black]  rounded-[16px]'>Оплатить</button>
            </div>
            <div className='flex'>
              <p className='text-[white] m-[10px]'>+7 (4725) 43-97-20</p>
              <p className='text-[white] m-[10px]'>Круглосуточно</p>
            </div>

            <div className='flex'>
              <img className='m-[10px]' src='src/assets/icon-telegram.png' />
              <img className='m-[10px]' src='src/assets/icon-viber.png' />
              <img className='m-[10px]' src='src/assets/icon-vk.png' />
              <img className='m-[10px]' src='src/assets/icon-wa.png' />


            </div>
          </div>
        </div>


        <div className='md:flex justify-evenly items-center mt-[30px]'>

          <p className='text-[#FFFFFF] mob:m-[20px]'>© ЗАО «Осколнэт», 2022</p>


          <p className='text-[#FFFFFF] mob:m-[20px]'>
            Продолжая использовать наш сайт, вы даете согласие на обработку файлов cookies и других <br /> пользовательских данных, в соответствии с Политикой конфиденциальности
          </p>


          <img src='src/assets/Group 35623.png' />
        </div>


      </section>

    </>

  )
}

export default App
