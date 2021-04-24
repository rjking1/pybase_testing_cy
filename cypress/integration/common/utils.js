export function compareFiles(a, e, ignoreCols) {
    // let alines =
    cy.readFile(a).then((actual) => {
        cy.readFile(e).then((expected) => {
            let a = actual.split('\n');
            let e = expected.split('\n');
            for (let i = 0; i++; i < a.length) {
                if (i in ignoreCols) { } else { expect(a[i]).to.equal(e[i]) }
            }
        })
    });
}
