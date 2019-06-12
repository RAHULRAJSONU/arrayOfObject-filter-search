import "./styles.css";
import data from "./report.json";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var theGreatGatsby = [
  {
    problems: [
      {
        Diabetes: [
          {
            medications: [
              {
                medicationsClasses: [
                  {
                    className: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 mg"
                          }
                        ]
                      }
                    ],
                    className2: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 mg"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            labs: [
              {
                missing_field: "missing_value"
              }
            ]
          }
        ],
        Asthma: [{}]
      }
    ]
  },
  {
    problems: [
      {
        Diabetes: [
          {
            medications: [
              {
                medicationsClasses: [
                  {
                    className: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 mg"
                          }
                        ]
                      }
                    ],
                    className2: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg"
                          }
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 kg"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            labs: [
              {
                missing_field: "missing_value"
              }
            ]
          }
        ],
        Asthma: [{}]
      }
    ]
  }
];
function search(array, keyword) {
  var t0 = performance.now();
  const regExp = new RegExp(keyword, "gi");
  const check = obj => {
    console.log(obj);
    if (obj !== null && typeof obj === "object") {
      return Object.values(obj).some(check);
    }
    if (Array.isArray(obj)) {
      return obj.some(check);
    }
    if (typeof obj === "string" || typeof obj === "number") {
      return obj
        .toString()
        .toLowerCase()
        .includes(keyword.toLowerCase());
    }
    // return (
    //   (typeof obj === "string" || typeof obj === "number") &&
    //   regExp.test(obj.toString())
    // );
  };
  var t1 = performance.now();
  console.log("processed in: " + (t1 - t0) + " milliseconds.");
  return array.filter(check);
}

console.log(search(data, "Lo"));
const k = "Long Term Gap Out";
const regExp = new RegExp("long", "gi");
console.log(k.includes("lo"));
