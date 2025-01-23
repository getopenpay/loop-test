import { initLoopConnect, LoopConnectPayIn } from "@loop-crypto/connect";
import './App.css'

initLoopConnect({
  apiKey: "964d4532-3ce4-45b2-a339-192dc46ebc76",
  entityId: "dc1a2948-c72a-439e-9f0f-788e4c4cad80",
  merchantId: "dc1a2948-c72a-439e-9f0f-788e4c4cad80",
});

function App() {
  return (
    <>
      <div className="App">
        <LoopConnectPayIn paymentUsdAmount={100} />
      </div>
    </>
  )
}

export default App
