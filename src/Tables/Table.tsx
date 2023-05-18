


function Table(props: any) {

    const { dictionary, calculateMean, calculateMedian, calculateMode, dataText } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {Object.keys(dictionary).map((id) => (
                        <th key={id}>Class {id}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dataText} Mean</td>
                    {Object.keys(dictionary).map((id) => (
                        <td key={id}>{calculateMean(dictionary[Number(id)])}</td>
                    ))}
                </tr>
                <tr>
                    <td>{dataText} Median</td>
                    {Object.keys(dictionary).map((id) => (
                        <td key={id}>{calculateMedian(dictionary[Number(id)])}</td>
                    ))}
                </tr>
                <tr>
                    <td>{dataText} Mode</td>
                    {Object.keys(dictionary).map((id) => (
                        <td key={id}>{calculateMode(dictionary[Number(id)])}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}
export default Table