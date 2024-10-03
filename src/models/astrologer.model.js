class Astrologer {
    constructor( id, name , isTopAtrologer = false) {
        this.id = id,
        this.name = name,
        this.isTopAtrologer = isTopAtrologer,
        this.flowCount = 0 // users assigned number
    }
}

export default Astrologer;