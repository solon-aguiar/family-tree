
const ENGLISH = Object.freeze({
    //Data files
    NoDataFile: 'No data available!',
    UpdateDataFile: 'Update data',
    DeleteDataFile: 'Delete data',
    ErrorUpdatingDataFile: 'There was an error updating the data. Try again!',

    //Messages
    ClickPrompt: 'Click on',
    DownloadDataExplanation: 'and select "Update Data" to download the newest data file',
    QuizExplanation: 'In this game, you will be presented with a photo and three names. Select the name that corresponds to the person depicted.',
    QuizCommand: 'Choose an option below to start or go back to the previous screen.',

    //Relationships
    Offspring: 'Offspring',
    Partner: 'Significant Other',
    Parents: 'Parents',

    //Labels
    Nickname: 'Nicknamed',
    Birthplace: 'Place of birth',
    LivesIn: 'Lives in',
    Speaks: 'Speaks',

    //Buttons
    Close: 'Close',
    SearchPlaceholder: 'Type in the name...',
    PasswordPrompt: 'Type in the password...',
    Done: 'Done',
    Back: 'Back',
    Start: "Let's do this!",

    //Pages
    GalleryScreen: 'Gallery',
    SearchScreen: 'Search',
    PersonScreen: 'Person info',
    SettingsScreen: 'Settings',
    QuizScreen: 'Quiz',

    //Quiz
    QuizCorrectQuestionsAnswered: '# of questions answered correctly',
    QuizTotalQuestions: '# of questions in total',
    QuizRemainingQuestions: '# of questions remaining',
    QuizCorrectAnswer: 'Good job! You got the right answer',
    QuizWrongAnswer: 'Oh no! That was the wrong answer',
    QuizNextQuestion: 'Next question!',
    QuizHeader: 'Who is this?',
    QuizDone: 'You are done! Thanks for playing.',
    QuizPercentage: 'of correct answers.',
    QuizPoorPerformance: 'Uh... not very good. You have to get to know more people!',
    QuizBadPerformance:  'Not the worst... but definitely not good!',
    QuizGoodPerformance:  'Not bad! You still have to meet some people, but did very well!',
    QuizBestPerformance:  'Wow! You really know everyone!',
    QuizDoneButton: 'Go back to Person Details'
});

const PORTUGUESE = Object.freeze({
    //Data files
    NoDataFile: 'Arquivo de dados inexistente!',
    UpdateDataFile: 'Atualizar dados',
    DeleteDataFile: 'Apagar dados',
    ErrorUpdatingDataFile: 'Houve um erro ao atualizar dados. Tente novamente!',

    //Messages
    ClickPrompt: 'Clique no',
    DownloadDataExplanation: 'e escolha "Atualizar dados" para baixar os dados atualizados',

    //Relationships
    Offspring: 'Filhos',
    Partner: 'Parceiro',
    Parents: 'Pais',

    //Labels
    Nickname: 'Apelido',
    Birthplace: 'Local de nascimento',
    LivesIn: 'Mora em',
    Speaks: 'fala',

    //Buttons
    Close: 'Fechar',
    SearchPlaceholder: 'Digite o nome...',
    PasswordPrompt: 'Digite a senha...',
    Done: 'Ok',
    Back: 'Voltar',

    //Pages
    GalleryScreen: 'Galeria',
    SearchScreen: 'Busca',
    PersonScreen: 'Dados pessoais',
    SettingsScreen: 'Configurações'
});

export { PORTUGUESE as pt_BR, ENGLISH as en_US };