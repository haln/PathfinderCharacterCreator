function getStatModifier(stat) {
    var modifier = Math.floor((stat - 10) / 2)
    return modifier;
}