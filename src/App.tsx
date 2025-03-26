import { initLoopConnect, LoopConnectPayIn } from "@loop-crypto/connect";
import './App.css'

initLoopConnect({
  // TODO: Add your keys/configs here.
  apiKey: "",
  entityId: "",
  merchantId: "",
  environment: "demo",
  onInitialized: ({ entityId }) => { console.log(entityId) },
  onInitFailed:	({ type, message, data }) => { console.log(`${type} ${message} ${data}`) },
  onWalletChange: ({ address }) => console.log(`${address}`),
  onNetworkChange: ({ id, name, chain }) => console.log(`${id} ${name} ${chain}`),
});

function App() {
  return (
    <>
      <div className="App">
        <LoopConnectPayIn
          paymentUsdAmount={100}
          suggestedAuthorizationUsdAmount={10000}
          minimumAuthorizationUsdAmount={10000}
          awaitConfirmation={true}
          onWalletChange={(detail) => {console.log('Loop wallet changed: ', detail)}}
          onNetworkChange={(detail) => {console.log('Loop network changed: ', detail)}}
          onPayInCustomerCreated={(customer) => {
            console.log('customer created')
            console.log(customer)
          }}
          onPayInStateChange={({ state, message, data }) => {
            if (state != 'complete') {
              console.log(
                'Received state change for payin but ignoring because it is not complete.',
                message,
                data
              );
              return;
            }
            console.log('Loop Payin complete: ', data);
          }}
          onPayInFailed={(detail) => {
            console.log('Loop Payin failed: ', detail);
          }}
        />
      </div>
    </>
  )
}

export default App
