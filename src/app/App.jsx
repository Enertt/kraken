import {Provider} from "react-redux";
import {store} from "../store/store.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import Router from "../routes/Routes.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})
const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Router/>
                </AuthProvider>
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
