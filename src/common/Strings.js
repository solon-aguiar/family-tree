
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
    Nickname: 'Called as',
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
    QuizDoneButton: 'Go back to Person Details',
    QuizSeeFinalResults: 'See final results',

    pt_BR: 'Portuguese',
    en_US: 'English',
    ja_JP: 'Japanese',
    zh_CN: 'Chinese',
    es_ES: 'Spanish'
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
    QuizExplanation: 'Nesse jogo, você terá que escolher o nome correto para a pessoa da foto.',
    QuizCommand: 'Esolha uma opção abaixo para jogar ou voltar à tela anterior.',

    //Relationships
    Offspring: 'Filhos',
    Partner: 'Parceiro',
    Parents: 'Pais',

    //Labels
    Nickname: 'Como chamar',
    Birthplace: 'Local de nascimento',
    LivesIn: 'Mora em',
    Speaks: 'fala',

    //Buttons
    Close: 'Fechar',
    SearchPlaceholder: 'Digite o nome...',
    PasswordPrompt: 'Digite a senha...',
    Done: 'Ok',
    Back: 'Voltar',
    Start: 'Começar!',

    //Pages
    GalleryScreen: 'Galeria',
    SearchScreen: 'Busca',
    PersonScreen: 'Dados pessoais',
    SettingsScreen: 'Configurações',
    QuizScreen: 'Quiz',

    //Quiz
    QuizCorrectQuestionsAnswered: '# de respostas corretas',
    QuizTotalQuestions: '# de perguntas',
    QuizRemainingQuestions: '# de perguntas restantes',
    QuizCorrectAnswer: 'Uau! Resposta correta!',
    QuizWrongAnswer: 'Que pena! Incorreto...',
    QuizNextQuestion: 'Próxima pergunta!',
    QuizHeader: 'Quem é?',
    QuizDone: 'Você terminou! Obrigado por jogar.',
    QuizPercentage: 'de respostas corretas.',
    QuizPoorPerformance: 'Opa... não muito bom. Você precisa conhecer mais pessoas!',
    QuizBadPerformance:  'Não foi o pior possível... mas definitivamente não foi bom!',
    QuizGoodPerformance:  'Nada mal! Você ainda precisa conhecer algumas pessoas, mas foi bem!',
    QuizBestPerformance:  'Uau! Você realmente conhece todo mundo!',
    QuizDoneButton: 'Voltar para os dados pessoais',
    QuizSeeFinalResults: 'Ver o resultado final',

    pt_BR: 'Português',
    en_US: 'Inglês',
    ja_JP: 'Japonês',
    zh_CN: 'Chinês',
    es_ES: 'Espanhol'
});

export { PORTUGUESE as pt_BR, ENGLISH as en_US };