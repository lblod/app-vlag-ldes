export default [
  {
    match: {
      graph: {
        type: "uri",
        value: "http://mu.semte.ch/graphs/ldes",
      },
    },
    callback: {
      url: "http://make-object/delta",
      method: "POST",
    },
    options: {
      resourceFormat: "v0.0.1",
      gracePeriod: 10000,
      ignoreFromSelf: true,
    },
  },
  {
    match: {
      subject: {},
    },
    callback: {
      url: "http://resource/.mu/delta",
      method: "POST",
    },
    options: {
      resourceFormat: "v0.0.1",
      gracePeriod: 250,
      ignoreFromSelf: true,
    },
  },
];
