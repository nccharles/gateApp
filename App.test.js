const rewire = require("rewire")
const App = rewire("./App")
const loadResourcesAsync = App.__get__("loadResourcesAsync")
const handleLoadingError = App.__get__("handleLoadingError")
const handleFinishLoading = App.__get__("handleFinishLoading")
// @ponicode
describe("loadResourcesAsync", () => {
    test("0", async () => {
        await loadResourcesAsync()
    })
})

// @ponicode
describe("handleLoadingError", () => {
    test("0", () => {
        let callFunction = () => {
            handleLoadingError("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleLoadingError("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleLoadingError("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleLoadingError("ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleLoadingError("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleLoadingError(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleFinishLoading", () => {
    test("0", () => {
        let callFunction = () => {
            handleFinishLoading(() => "^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleFinishLoading(() => "v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleFinishLoading(() => "v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleFinishLoading(() => "4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleFinishLoading(() => "1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleFinishLoading(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
