import axios from "axios";

const SQUIDEX_URL = import.meta.env.VITE_SQUIDEX_URL;
const APP_NAME = import.meta.env.VITE_SQUIDEX_APP_NAME;
const CLIENT_ID = import.meta.env.VITE_SQUIDEX_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SQUIDEX_CLIENT_SECRET;

class SquidexService {
  constructor() {
    this.token = null;
    this.tokenExpiry = null;
  }

  async getAccessToken() {
    // Return cached token if still valid
    if (this.token && this.tokenExpiry > Date.now()) {
      return this.token;
    }

    try {
      const response = await axios.post(
        `${SQUIDEX_URL}/identity-server/connect/token`,
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          scope: "squidex-api",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      this.token = response.data.access_token;
      // Set expiry 5 minutes before actual expiry
      this.tokenExpiry = Date.now() + (response.data.expires_in - 300) * 1000;

      return this.token;
    } catch (error) {
      console.error("Error getting access token:", error);
      throw error;
    }
  }

  async getContent(schemaName, options = {}) {
    const token = await this.getAccessToken();
    const { filter, orderby, top, skip } = options;

    const params = new URLSearchParams();
    if (filter) params.append("$filter", filter);
    if (orderby) params.append("$orderby", orderby);
    if (top) params.append("$top", top);
    if (skip) params.append("$skip", skip);

    try {
      const response = await axios.get(
        `${SQUIDEX_URL}/api/content/${APP_NAME}/${schemaName}?${params}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.items;
    } catch (error) {
      console.error("Error fetching content:", error);
      throw error;
    }
  }

  async getContentById(schemaName, id) {
    const token = await this.getAccessToken();

    try {
      const response = await axios.get(
        `${SQUIDEX_URL}/api/content/${APP_NAME}/${schemaName}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching content by ID:", error);
      throw error;
    }
  }

  async createContent(schemaName, data, publish = true) {
    const token = await this.getAccessToken();

    try {
      const response = await axios.post(
        `${SQUIDEX_URL}/api/content/${APP_NAME}/${schemaName}?publish=${publish}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error creating content:", error);
      throw error;
    }
  }

  async updateContent(schemaName, id, data) {
    const token = await this.getAccessToken();

    try {
      const response = await axios.put(
        `${SQUIDEX_URL}/api/content/${APP_NAME}/${schemaName}/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error updating content:", error);
      throw error;
    }
  }

  async deleteContent(schemaName, id) {
    const token = await this.getAccessToken();

    try {
      await axios.delete(
        `${SQUIDEX_URL}/api/content/${APP_NAME}/${schemaName}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return true;
    } catch (error) {
      console.error("Error deleting content:", error);
      throw error;
    }
  }
  // Add to your SquidexService class
  getAssetUrl(assetId, options = {}) {
    const { width, height, mode = "Crop", quality } = options;

    let url = `${SQUIDEX_URL}/api/assets/${APP_NAME}/${assetId}`;

    const params = new URLSearchParams();
    if (width) params.append("width", width);
    if (height) params.append("height", height);
    if (mode) params.append("mode", mode);
    if (quality) params.append("quality", quality);

    const queryString = params.toString();
    return queryString ? `${url}?${queryString}` : url;
  }
}

export default new SquidexService();
