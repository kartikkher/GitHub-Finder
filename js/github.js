class GitHub {
  constructor() {
    this.client_id = "Iv1.31a2c94ba7b14a88";
    this.client_secret = "bf3793758d42c23fcb094c1252b1e909dd60ca0d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
