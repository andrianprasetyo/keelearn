import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import QuestionContent from "../../components/QuestionContent/QuestionContent";
import NavigationBottom from "../../components/NavigationBottom/NavigationBottom";
import AlertSection from "../../components/AlertSection/AlertSection";
import Header from "../../components/Header/Header";

import dataQuestionJSON from "../../data/dataQuestion.json";

function Question() {
  const router = useRouter();
  const initialState = {
    question: [],
    currentQuestion: null,
    currentQuestionNo: 1,
    currentQuestionAnswer: "",
    userAnswer: [],
    progress: 0,
  };

  const [stateQuestion, setStateQuestion] = useState(initialState);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setStateQuestion((stateQuestion.question = dataQuestionJSON));
  }, [dataQuestionJSON]);

  useEffect(() => {
    if (stateQuestion.question !== []) {
      setStateQuestion({
        ...stateQuestion,
        currentQuestion: stateQuestion.question[0],
      });
    }
  }, [stateQuestion.question]);

  const handleChoice = (selected) => {
    const choice = { [stateQuestion.currentQuestionNo]: selected };

    setStateQuestion({ ...stateQuestion, currentQuestionAnswer: choice });
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  // const handleBack = () => {
  //   if (stateQuestion.currentQuestionNo > 1) {
  //     setStateQuestion({
  //       ...stateQuestion,
  //       currentQuestionNo: (stateQuestion.currentQuestionNo -= 1),
  //       currentQuestion: stateQuestion.question[stateQuestion.currentQuestionNo],
  //     });
  //     console.log(`CURRENT: ${stateQuestion.currentQuestionNo}`);
  //     console.log(`PROGRESS: ${stateQuestion.progress}`);
  //   }
  // };

  const handleNext = () => {
    const totalQuestion = stateQuestion.question.length;

    if (stateQuestion.currentQuestionAnswer === "") {
      return handleAlert();
    }

    if (stateQuestion.currentQuestionNo < totalQuestion) {
      setStateQuestion({
        ...stateQuestion,
        currentQuestion: stateQuestion.question[stateQuestion.currentQuestionNo],
        currentQuestionNo: (stateQuestion.currentQuestionNo += 1),
        userAnswer: [...stateQuestion.userAnswer, stateQuestion.currentQuestionAnswer],
        currentQuestionAnswer: "",
        progress: (stateQuestion.currentQuestionNo / totalQuestion) * 100,
      });

      // console.log(`CURRENT: ${stateQuestion.currentQuestionNo}`);
      // console.log(`PROGRESS: ${stateQuestion.progress}`);
    }
  };

  const handleFinish = () => {
    if (stateQuestion.currentQuestionAnswer === "") {
      return handleAlert();
    }

    setStateQuestion({
      ...stateQuestion,
      userAnswer: [...stateQuestion.userAnswer, stateQuestion.currentQuestionAnswer],
    });
  };

  const handleResult = () => {
    const userAnswer = {};

    stateQuestion.userAnswer.map((item) => {
      userAnswer[Object.keys(item).join()] = Object.values(item).join();
    });

    sendData(userAnswer);
  };

  const sendData = (data) => {
    fetch("/api/decision-tree", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userAnswer: data }),
    })
      .then((res) => res.json())
      .then((res) =>
        router.push({
          pathname: "/result/" + res.hasil.toLowerCase(),
        })
      );
  };

  return (
    <>
      <Head>
        <title>Keelearn - Question</title>
        <meta name="description" content="Keelearn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {showAlert && (
        <Container className="sticky-top" fluid>
          <div className="text-center">
            <AlertSection show={showAlert} />
          </div>
        </Container>
      )}

      {stateQuestion.currentQuestion != null && (
        <QuestionContent
          id={stateQuestion.currentQuestion.id}
          question={stateQuestion.currentQuestion.question}
          choice={stateQuestion.currentQuestion.choice}
          onChoiceSelected={handleChoice}
        />
      )}

      <Container className="fixed-bottom" fluid>
        <NavigationBottom
          progress={stateQuestion.progress}
          onNext={handleNext}
          onResult={handleResult}
          onFinish={handleFinish}
          userAnswer={stateQuestion.userAnswer.length}
        />
      </Container>
    </>
  );
}

export default Question;
