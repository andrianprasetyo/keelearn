import Tree from "react-d3-tree";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./TreeGraph.module.css";
import { useEffect, useState, useRef } from "react";

const orgChart = {
  name: "pertanyaan_6",
  children: [
    {
      name: "A",
      children: [
        {
          name: "Visual",
          children: [],
        },
      ],
    },
    {
      name: "B",
      children: [
        {
          name: "pertanyaan_4",
          children: [
            {
              name: "B",
              children: [
                {
                  name: "pertanyaan_7",
                  children: [
                    {
                      name: "A",
                      children: [
                        {
                          name: "pertanyaan_2",
                          children: [
                            {
                              name: "B",
                              children: [
                                {
                                  name: "Auditory",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "C",
                              children: [
                                {
                                  name: "Visual",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "B",
                      children: [
                        {
                          name: "Auditory",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "C",
              children: [
                {
                  name: "pertanyaan_9",
                  children: [
                    {
                      name: "A",
                      children: [
                        {
                          name: "pertanyaan_7",
                          children: [
                            {
                              name: "A",
                              children: [
                                {
                                  name: "pertanyaan_5",
                                  children: [
                                    {
                                      name: "B",
                                      children: [
                                        {
                                          name: "Visual",
                                          children: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "C",
                                      children: [
                                        {
                                          name: "Kinestetik",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "B",
                              children: [
                                {
                                  name: "Kinestetik",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "B",
                      children: [
                        {
                          name: "pertanyaan_5",
                          children: [
                            {
                              name: "B",
                              children: [
                                {
                                  name: "Auditory",
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: "C",
                              children: [
                                {
                                  name: "pertanyaan_11",
                                  children: [
                                    {
                                      name: "A",
                                      children: [
                                        {
                                          name: "Kinestetik",
                                          children: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "B",
                                      children: [
                                        {
                                          name: "Auditory",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "C",
      children: [
        {
          name: "Kinestetik",
          children: [],
        },
      ],
    },
  ],
};

function TreeGraph() {
  const treeRef = useRef();

  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  useEffect(() => {
    setTranslate({
      x: window.innerWidth / 2,
      y: 50,
    });

    console.log("treeRef", treeRef.current);
  }, []);
  return (
    <>
      <section className={`mh-100`} id="result-content-hero">
        <Container fluid>
          <Row>
            <Col>
              <div className="pt-4">
                <Row className="d-flex justify-content-center align-items-center">
                  <h3 className={`${classes.heading} text-center`}>
                    <span className="text-primary">Tree</span>
                    <span style={{ color: "#1F1F1F" }}> Keelearn</span>
                  </h3>
                </Row>

                <div className="vh-100 w-100" style={{ overflow: "scroll" }}>
                  <div id="treeWrapper" style={{ height: 1500, width: 2000 }}>
                    <Tree
                      ref={treeRef}
                      orientation={"vertical"}
                      data={orgChart}
                      zoomable={true}
                      translate={{ x: translate.x, y: translate.y }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TreeGraph;
