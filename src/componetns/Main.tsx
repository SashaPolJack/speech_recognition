import useSpeechRecognition from "../Hooks/useSpeechRecognitionHook";

const Main = () => {
    const { text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport} = useSpeechRecognition()
    return (
        <div>
            {hasRecognitionSupport ? (
                <>
                    <div>
                        <button onClick={startListening}>Start</button>
                    </div>

                    {isListening ? <div> Слушаем...</div>: null}
                    {text}
                </>
            ) : (
                <h1>Бразузер не поддерживает webkitSpeechRecognition</h1>
            )}
        </div>
    )
}

export default Main;