import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    // <>
    //   <h1 className="text-3xl font-bold mt-5 text-center bg-orange-500">Currency Convertor App</h1>

    //   <div
    //         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    //         style={{
    //             backgroundImage: `url('https://miro.medium.com/max/3840/1*2bf303U0V7AH3wP6ezUZ5g.jpeg')`,
    //         }}
    //     >
    //         <div className="w-full">
    //             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
    //                 <form
    //                     onSubmit={(e) => {
    //                         e.preventDefault();
    //                         convert()
                           
    //                     }}
    //                 >
    //                     <div className="w-full mb-1">
    //                         <InputBox
    //                             label="From"
    //                             amount={amount}
    //                             currencyOptions={options}
    //                             oncurrencyChange={(currency) => setAmount(amount)}
    //                             selectedCurrency={from}
    //                             onAmountChange={(amount) => setAmount(amount)}
    //                         />
    //                     </div>
    //                     <div className="relative w-full h-0.5">
    //                         <button
    //                             type="button"
    //                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
    //                             onClick={swap}
    //                         >
    //                             swap
    //                         </button>
    //                     </div>
    //                     <div className="w-full mt-1 mb-4">
    //                         <InputBox
    //                             label="To"
    //                             amount={convertedAmount}
    //                             currencyOptions={options}
    //                             oncurrencyChange={(currency) => setTo(currency)}
    //                             selectedCurrency={from}
    //                             amountDisabled
    //                         />
    //                     </div>
    //                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
    //                         Convert {from.toUpperCase()} to {to.toUpperCase()}
    //                     </button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </>

    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-5 px-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white tracking-wide">
          💱 Currency Converter
        </h1>

        <p className="text-center text-white/80 text-sm mt-1">
          Fast & simple currency conversion
        </p>
      </div>

      {/* Main Background */}
      <div
        className="w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat px-4 py-10"
        style={{
          backgroundImage: `linear-gradient(
            rgba(15, 23, 42, 0.75),
            rgba(30, 41, 59, 0.85)
          ), url('https://miro.medium.com/max/3840/1*2bf303U0V7AH3wP6ezUZ5g.jpeg')`,
        }}
      >
        <div className="w-full max-w-md">

          {/* Converter Card */}
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              border border-white/30
              bg-white/15
              backdrop-blur-xl
              shadow-2xl
              p-6 md:p-8
            "
          >

            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/30 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              {/* Card Header */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-orange-300 text-xs font-semibold uppercase tracking-[3px]">
                    Exchange
                  </p>

                  <h2 className="text-2xl font-bold text-white mt-1">
                    Convert Currency
                  </h2>
                </div>

                <div
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br from-orange-500 to-pink-600
                    shadow-lg
                    text-2xl
                  "
                >
                  💰
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >

                {/* From */}
                <div className="w-full mb-3">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    oncurrencyChange={(currency) => setFrom(currency)}
                    selectedCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>

                {/* Swap Area */}
                <div className="relative w-full h-12">

                  <div className="absolute top-1/2 left-0 right-0 border-t border-white/20"></div>

                  <button
                    type="button"
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-12 h-12
                      flex items-center justify-center
                      rounded-full
                      border-4 border-slate-900/80
                      bg-gradient-to-r from-blue-500 to-purple-600
                      text-white
                      text-xl
                      shadow-xl
                      hover:scale-110
                      hover:rotate-180
                      active:scale-95
                      transition-all duration-300
                    "
                    onClick={swap}
                    title="Swap currencies"
                  >
                    ⇅
                  </button>

                </div>

                {/* To */}
                <div className="w-full mt-2 mb-6">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    oncurrencyChange={(currency) => setTo(currency)}
                    selectedCurrency={to}
                    amountDisabled
                  />
                </div>

                {/* Convert Button */}
                <button
                  type="submit"
                  className="
                    group
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-orange-500
                    via-pink-500
                    to-purple-600
                    text-white
                    font-bold
                    text-lg
                    shadow-lg
                    shadow-purple-900/30
                    hover:shadow-2xl
                    hover:-translate-y-1
                    active:translate-y-0
                    transition-all duration-300
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    Convert

                    <span className="text-orange-200">
                      {from.toUpperCase()}
                    </span>

                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>

                    <span className="text-yellow-200">
                      {to.toUpperCase()}
                    </span>
                  </span>
                </button>

              </form>

              {/* Bottom Info */}
              <div className="flex justify-center gap-6 mt-6 text-xs text-white/60">
                <span>⚡ Fast</span>
                <span>🔒 Simple</span>
                <span>🌎 Global</span>
              </div>

            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-white/50 text-xs mt-5">
            Currency Converter • Simple & Responsive
          </p>

        </div>
      </div>
    </>
  )
}

export default App


