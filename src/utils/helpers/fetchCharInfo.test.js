import fetchCharInfo from "./fetchCharInfo";

beforeEach(() => fetch.resetMocks());

describe("fetchCharInfo", () => {
  it("fetches data", async () => {
    fetch.mockResponse(
      JSON.stringify({
        name: "morty",
      })
    );

    let received = await fetchCharInfo();

    expect(received).toEqual({ name: "morty" });
  });

  it("returns null when error caught", async () => {
    fetch.mockReject(() => "error");

    let received = await fetchCharInfo();

    expect(received).toEqual(null);
  });
});
