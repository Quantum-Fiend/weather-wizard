import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,Strong as RadixThemesStrong,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import DebounceInput from "react-debounce-input"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import {jsx} from "@emotion/react"




function Debounceinput_f78a683bae80e0986cf7f55296a0d173 () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_df610db15e548b7fd75d8a6043c1f720 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.weather_wizard_python___weather_wizard_python____weather_state.handle_input_change", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{className:" search-input",debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_df610db15e548b7fd75d8a6043c1f720,placeholder:"\ud83d\udd0d Enter city",value:(isNotNullOrUndefined(reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.search_term_rx_state_) ? reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.search_term_rx_state_ : "")},)
  )
}


function Button_33a31740c6aba42e70843c8c4aa27651 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d37e342df54d542e1f5d65662e79df10 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.weather_wizard_python___weather_wizard_python____weather_state.get_weather", ({ ["city"] : "" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{className:"search-btn",onClick:on_click_d37e342df54d542e1f5d65662e79df10},"Search")
  )
}


function Button_d503ab785f9b97f80a72494395fb41ce () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)

const on_click_667f4588d09d11412375e3b3250bb452 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.weather_wizard_python___weather_wizard_python____weather_state.toggle_unit", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{className:"unit-btn",onClick:on_click_667f4588d09d11412375e3b3250bb452},((reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.unit_rx_state_?.valueOf?.() === "metric"?.valueOf?.()) ? "Show \u00b0F" : "Show \u00b0C"))
  )
}


function Text_611e795de1ebe9903d54cbfa30b90e2f () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "red" })},reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.error_rx_state_)
  )
}


function Fragment_cd0c2f94b7a142e9e76898f35ab9c0c3 () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.error_rx_state_)?(jsx(Fragment,{},jsx(Text_611e795de1ebe9903d54cbfa30b90e2f,{},))):(jsx(Fragment,{},))))
  )
}


function Heading_940e19a01e2000819e73e3c3aa5af9d4 () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(RadixThemesHeading,{},reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.current_weather_rx_state_?.["name"])
  )
}


function Strong_1990d6ab751ff973f35c1b6b00cf673b () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(RadixThemesStrong,{},reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.current_weather_rx_state_?.["main"]?.["temp"])
  )
}


function Button_12cf759a07ccfb8f159d71f9180cda85 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_694def5b8416e273de165418383f6234 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.weather_wizard_python___weather_wizard_python____weather_state.add_favorite", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["marginTop"] : "1rem" }),onClick:on_click_694def5b8416e273de165418383f6234},"\u2764\ufe0f Favorite")
  )
}


function Fragment_416120ea5a4b213d820194ed02eb9dd8 () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(Fragment,{},(!((reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.current_weather_rx_state_?.["name"]?.valueOf?.() === ""?.valueOf?.()))?(jsx(Fragment,{},jsx(RadixThemesBox,{className:"weather-card"},jsx(Heading_940e19a01e2000819e73e3c3aa5af9d4,{},),jsx(RadixThemesText,{as:"p"},"Temp: ",jsx(Strong_1990d6ab751ff973f35c1b6b00cf673b,{},)),jsx(Button_12cf759a07ccfb8f159d71f9180cda85,{},)))):(jsx(Fragment,{},jsx(RadixThemesText,{as:"p"},"No weather data")))))
  )
}


function Grid_b89da2520e439dcb88c5f601d2ecc5bc () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(RadixThemesGrid,{className:"forecast-grid"},Array.prototype.map.call(reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.forecast_data_rx_state_ ?? [],((data_rx_state_,index_c69787623b4844f47d4a29af39e60a9d)=>(jsx(RadixThemesBox,{className:"forecast-card",key:index_c69787623b4844f47d4a29af39e60a9d},jsx(RadixThemesText,{as:"p"},data_rx_state_?.["dt_txt"]),jsx(RadixThemesText,{as:"p"},data_rx_state_?.["main"]?.["temp"]),jsx(RadixThemesText,{as:"p"},data_rx_state_?.["weather"]?.at?.(0)?.["main"]))))))
  )
}


function Fragment_42efa5b378bf4a51609d577e95d488f5 () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.forecast_data_rx_state_)?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(RadixThemesHeading,{className:"section-title"},"\ud83d\udcc6 5-Day Forecast"),jsx(Grid_b89da2520e439dcb88c5f601d2ecc5bc,{},)))):(jsx(Fragment,{},))))
  )
}


function Flex_9e70e454ed5c22aa2ed9fb005ed8b9ef () {
  const reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state = useContext(StateContexts.reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{className:"favorites-list"},Array.prototype.map.call(reflex___state____state__weather_wizard_python___weather_wizard_python____weather_state.favorites_rx_state_ ?? [],((city_rx_state_,index_94ec747d5cf4fb7901dfde7ff2057e0a)=>(jsx(RadixThemesBox,{className:"fav-chip",key:index_94ec747d5cf4fb7901dfde7ff2057e0a,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.weather_wizard_python___weather_wizard_python____weather_state.select_favorite", ({ ["city"] : city_rx_state_ }), ({  })))], [_e], ({  }))))},city_rx_state_)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{className:"weather-container"},jsx(RadixThemesBox,{className:"content-wrapper"},jsx(RadixThemesHeading,{className:"app-title"},"\ud83c\udf19 Weather Wizard"),jsx(RadixThemesFlex,{className:"search-bar"},jsx(Debounceinput_f78a683bae80e0986cf7f55296a0d173,{},),jsx(Button_33a31740c6aba42e70843c8c4aa27651,{},),jsx(Button_d503ab785f9b97f80a72494395fb41ce,{},)),jsx(Fragment_cd0c2f94b7a142e9e76898f35ab9c0c3,{},),jsx(Fragment_416120ea5a4b213d820194ed02eb9dd8,{},),jsx(Fragment_42efa5b378bf4a51609d577e95d488f5,{},),jsx(RadixThemesBox,{},jsx(RadixThemesHeading,{className:"section-title"},"\u2764\ufe0f Favorite Cities"),jsx(Flex_9e70e454ed5c22aa2ed9fb005ed8b9ef,{},)))),jsx("title",{},"WeatherWizardPython | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}