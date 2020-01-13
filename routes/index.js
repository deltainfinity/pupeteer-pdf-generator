const express = require("express");
const router = express.Router();
const saveToPdf = require("../controller/safeToPdf");

// Home Page
router.get("/", (_, res, __) => {
  res.send(
    `This is a printable PDF document, here is some good info about designing for print: <a href="https://www.smashingmagazine.com/2015/01/designing-for-print-with-css">Click Here</a>! 
    <p>
    <a href="/generate-pdf">Click here to print this page!`
  );
});

// Download PDF Route
router.get("/generate-pdf", async (req, res, __) => {
  var json = {
    "BirthDate": "1982-03-11T00:00:00",
    "DateCompleted": "2019-12-13T11:58:39.42",
    "SubjectFirstName": "sadik",
    "SubjectLastName": "naina",
    "SubjectExternalID": "6574567456456",
    "SORID": "SOR ID",
    "UserFirstName": "Fresno JP",
    "UserLastName": "Administrator",
    "ReasonText": null,
    "ReportInformation": {
      "QuestionAnswerDetails": [
        {
          "SectionID": 44026,
          "SectionSequenceID": 1,
          "Title": "Housing and Caregiving",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 1,
              "QuestionID": 127350,
              "Question": "Youth runs away or frequently leaves their residence for extended periods of time (overnight, days, weeks).",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 2,
              "QuestionID": 127351,
              "Question": "Youth experiences unstable housing, including multiple foster/group home placements.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 3,
              "QuestionID": 127352,
              "Question": "Youth experiences periods of homelessness, e.g. living on the street or couch surfing.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 4,
              "QuestionID": 127353,
              "Question": "Youth relies on emergency or temporary resources to meet basic needs, e.g. hygiene, shelter, food, medical care.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 5,
              "QuestionID": 127354,
              "Question": "Parent/caregiver is unable to provide adequate supervision.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 6,
              "QuestionID": 127355,
              "Question": "Youth has highly irregular school attendance including frequent or prolonged tardiness or absences.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 7,
              "QuestionID": 127357,
              "Question": "Youth has current or past involvement with the child welfare system.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44027,
          "SectionSequenceID": 2,
          "Title": "Prior abuse or trauma",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 8,
              "QuestionID": 127358,
              "Question": "Youth has been sexually abused.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 9,
              "QuestionID": 127359,
              "Question": "Youth has been physically abused.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 10,
              "QuestionID": 127360,
              "Question": "Youth has been emotionally abused.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 11,
              "QuestionID": 127361,
              "Question": "Youth has witnessed a domestic violence.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44028,
          "SectionSequenceID": 3,
          "Title": "Physical Health and Appearance",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 12,
              "QuestionID": 127362,
              "Question": "Youth presents a significant change in appearance, e.g. dress, hygiene, weight.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 13,
              "QuestionID": 127363,
              "Question": "Youth shows signs of physical trauma, such as bruises, black eyes, cigarette burns or broken bones.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 14,
              "QuestionID": 127364,
              "Question": "Youth has tattoos, scarring or branding, indicating being treated as someones property.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 15,
              "QuestionID": 127365,
              "Question": "Youth has repeated or concerning testing or treatment for pregnancy or STIs.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 16,
              "QuestionID": 127366,
              "Question": "Youth is sleep deprived or sleep is inconsistent.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 17,
              "QuestionID": 127367,
              "Question": "Youth has health problems or complaints related to poor nutrition or irregular access to meals.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 18,
              "QuestionID": 127368,
              "Question": "Youths substance use impacts their health or interferes with their ability to function.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 19,
              "QuestionID": 127369,
              "Question": "Youth experiences significant change or escalation in their substance use.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44029,
          "SectionSequenceID": 4,
          "Title": "Environment and exposure",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 20,
              "QuestionID": 127370,
              "Question": "Youth engages in sexual activities that cause harm or place them at risk of victimization.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 21,
              "QuestionID": 127372,
              "Question": "Youth uses language that suggests involvement in exploitation.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 22,
              "QuestionID": 127373,
              "Question": "Youth is connected to people who are exploited, or who buy or sell sex.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 23,
              "QuestionID": 127374,
              "Question": "Youth is bullied or targeted about exploitation.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 24,
              "QuestionID": 127375,
              "Question": "Youth has current or past involvement with law enforcement or juvenile justice.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 25,
              "QuestionID": 127376,
              "Question": "Gang affiliation or contact involves youth in unsafe sexual encounters.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44030,
          "SectionSequenceID": 5,
          "Title": "Relationships and personal belongings",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 26,
              "QuestionID": 127377,
              "Question": "Youth has unhealthy, inappropriate or romantic relationships, including (but not limited to) with someone older/an adult.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 27,
              "QuestionID": 127378,
              "Question": "Youth meets with contacts they developed over the internet, including sex partners or boyfriends/girlfriends.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 28,
              "QuestionID": 127379,
              "Question": "Explicit photos of the youth are posted on the internet or on their phone.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 29,
              "QuestionID": 127380,
              "Question": "Youth receives or has access to unexplained money, credit cards, hotel keys, gifts, drugs, alcohol, transportation.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 30,
              "QuestionID": 127381,
              "Question": "Youth has several cell phones or their cell phone number changes frequently.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 31,
              "QuestionID": 127382,
              "Question": "Youth travels to places that are inconsistent with their life circumstance.",
              "Answers": [
                {
                  "Answer": "Possible Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 3,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44031,
          "SectionSequenceID": 6,
          "Title": "Signs of current trauma",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 32,
              "QuestionID": 127383,
              "Question": "Youth appears on edge, preoccupied with safety, or hypervigilant.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 33,
              "QuestionID": 127384,
              "Question": "Youth has difficulty detecting or responding to danger cues.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 34,
              "QuestionID": 127385,
              "Question": "Youth engages in self-destructive, aggressive, or risk-taking behavior.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 35,
              "QuestionID": 127386,
              "Question": "Youth has a high level of distress about being accessible by cell phone.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44032,
          "SectionSequenceID": 7,
          "Title": "Coercion",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 36,
              "QuestionID": 127387,
              "Question": "Youth has an abusive or controlling intimate partner.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 37,
              "QuestionID": 127388,
              "Question": "Someone else is controlling the youths contact with family or friends, leaving the youth socially isolated.",
              "Answers": [
                {
                  "Answer": "Clear Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 4,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 38,
              "QuestionID": 127389,
              "Question": "Youth is coerced into getting pregnant, having an abortion, or using contraception.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 39,
              "QuestionID": 127390,
              "Question": "Someone is not allowing youth to sleep regularly or in a safe place, go to school, eat, or meet other basic needs.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 40,
              "QuestionID": 127391,
              "Question": "The youth or their friends, family, or other associates receive threats.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 41,
              "QuestionID": 127392,
              "Question": "Youth gives vague or misleading information about their age, whereabouts, residence or relationships.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        },
        {
          "SectionID": 44033,
          "SectionSequenceID": 8,
          "Title": "Exploitation",
          "QuestionsAndAnswers": [
            {
              "QuestionSequenceID": 42,
              "QuestionID": 127393,
              "Question": "Youth is exchanging sex for money or material goods, including food or shelter for themselves or someone else, e.g. child, family, partner.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 43,
              "QuestionID": 127394,
              "Question": "Youth is watched, filmed or photographed in a sexually explicit manner.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 44,
              "QuestionID": 127395,
              "Question": "Youth has a history of sexual exploitation.",
              "Answers": [
                {
                  "Answer": "No Concern",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 6,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            },
            {
              "QuestionSequenceID": 45,
              "QuestionID": 127396,
              "Question": "Youth is forced to give the money they earn to another person.",
              "Answers": [
                {
                  "Answer": "No information",
                  "AnswerID": null,
                  "ParentAnswerID": null,
                  "AnswerDataType": null,
                  "AnswerImageType": 5,
                  "AnswerSequence": 0,
                  "HasSubAnswer": false,
                  "SubAnswers": null
                }
              ]
            }
          ]
        }
      ],
      "OffenderAssessmentScores": [
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 1,
          "ScoreName": "Housing and Caregiving",
          "SectionScore": 0.00,
          "RiskLevel": "No Concern",
          "StartRange": 1.00,
          "EndRange": 14.00,
          "ChartRiskPercentages": 0.0,
          "RangeColor": "#3CB54A",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 2,
          "ScoreName": "Prior abuse or trauma",
          "SectionScore": 4.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 8.00,
          "ChartRiskPercentages": 50.0,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 3,
          "ScoreName": "Physical Health and Appearance",
          "SectionScore": 8.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 16.00,
          "ChartRiskPercentages": 50.0,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 4,
          "ScoreName": "Environment and exposure",
          "SectionScore": 8.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 14.00,
          "ChartRiskPercentages": 57.142857142857142857142857140,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 5,
          "ScoreName": "Relationships and personal belongings",
          "SectionScore": 5.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 12.00,
          "ChartRiskPercentages": 41.666666666666666666666666670,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 6,
          "ScoreName": "Signs of current trauma",
          "SectionScore": 8.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 8.00,
          "ChartRiskPercentages": 100.0,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 7,
          "ScoreName": "Coercion",
          "SectionScore": 2.00,
          "RiskLevel": "Clear Concern",
          "StartRange": 1.00,
          "EndRange": 12.00,
          "ChartRiskPercentages": 16.666666666666666666666666670,
          "RangeColor": "#ED2024",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        },
        {
          "UserAssessmentID": 13114,
          "SectionSequence": 8,
          "ScoreName": "Exploitation",
          "SectionScore": 0.00,
          "RiskLevel": "No Concern",
          "StartRange": 1.00,
          "EndRange": 9.00,
          "ChartRiskPercentages": 0.0,
          "RangeColor": "#3CB54A",
          "RangeDescription": null,
          "SectionStartRange": 0.0,
          "SectionEndRange": 0.0
        }
      ],
      "RiskInformation": {
        "RiskScore": 12,
        "MaxScore": 93,
        "RiskLevel": "Clear Concern",
        "RiskColor": "#ED2024"
      }
    }
  };

  let result = await saveToPdf(json);
  res.attachment(`node-express-puppeteer-pdf-example.pdf`);
  res.contentType("application/pdf");
  res.send(result);
});

module.exports = router;
